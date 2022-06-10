
import * as React from "react";


export default function Loader({isBusy}){

    return <div style={{
        transition: "opacity 1000ms",
        opacity: isBusy ? 1 : 0,
    }}>
        <iframe
        style={{
            zIndex:1000,
            position: 'absolute',
        }}
        width={'100%'} height={'100%'} frameBorder={0} src={'loaders/test2.html'}>

        </iframe>

    </div>

}
