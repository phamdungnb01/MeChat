import styled from "styled-components"


export default function Loading(){
    return(
        <LoadingField>
            <img src="/Imgs/loading.gif"></img>
        </LoadingField>
    )
}
const LoadingField = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(24, 144, 255);
`