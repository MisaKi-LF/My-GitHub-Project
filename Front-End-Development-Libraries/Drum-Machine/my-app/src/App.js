import './App.scss'
import {useStateValue} from "./stateProvider"
import {useRef , useEffect,useState} from "react";
import {actionTypes} from "./reducer"
export const App = prop => {
    return(
        <div id="drum-machine">
            <DrumPad id="pad-bank" />
            <Display />
        </div>
    )
}
const DrumPad = () => {
    const [state,setState] = useState([
        {name:'Q',id:'Cev H2',url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',keyCode:81},
        {name:'W',id:'Dry Ohh',url:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',keyCode:87},
        {name:'E',id:'Dsc Oh',url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',keyCode:69},
        {name:'A',id:'Heater 6',url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',keyCode:65},
        {name:'S',id:'Side Stick',url:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',keyCode:83},
        {name:'D',id:'Bld H1',url:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',keyCode:68},
        {name:'Z',id:'Punchy Kick',url:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',keyCode:90},
        {name:'X',id:"Kick n' Hat",url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',keyCode:88},
        {name:'C',id:'Snare',url:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',keyCode:67}
    ])
    return(
        <div className="pad-bank">
            { state.map((pad,idx) => (
                <Pad
                    key={idx}
                    id={pad.id}
                    keyChar={pad.name}
                    url={pad.url}
                    keyCode={pad.keyCode}
                />
            ))}
        </div>
    )
}
const Pad = props => {
    const audioRef = useRef();
    const psdRef = useRef();
    const [state, dispatch] = useStateValue()
    const handlePad = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        lightenPad()
        dispatch({
            type: actionTypes.SET_DISPLAY,
            soundName: props.id
        })
    }
    const handleKey = (e) => {
        if(e.keyCode === props.keyCode) {
            audioRef.current.currentTime=0;
            audioRef.current.play();
            lightenPad()
            dispatch({
                type: actionTypes.SET_DISPLAY,
                soundName: props.id
            })
        }
    }
    const lightenPad = () => {
        psdRef.current.classList.add('active');
        setTimeout(()=> {
            psdRef.current.classList.remove('active')
        },100)
    }
    useEffect(() => {
        window.addEventListener('keydown',handleKey);
        return () => {
                window.addEventListener('keydown',handleKey)
        }

    })
    return(
        <div ref={psdRef} id={props.id} onClick={handlePad} className="drum-pad">
            <audio
                ref={audioRef}
                src={props.url}
                className="clip"
            ></audio>
            <span>{props.keyChar}</span>
        </div>
    )
}
const Display = () => {
    const [{displaySoundName}] = useStateValue()
    return(
        <div className="display" id="display">
            <h2>{displaySoundName}</h2>
        </div>
    )
}