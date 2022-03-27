import styled from "styled-components";

export const Container = styled.form`
    margin: 1rem 0;
    width: 100%;
    padding:5px;

    h2 {
      padding-top:5px;
    }

    &.login-width {
        max-width: 350px;
    }
    &.register-width{
        max-width: 450px;
    }
`
export const Group = styled.div`
position: relative;
display: flex;
width: 100%;
flex-direction: column;

height: 100%;
.round{
    margin-bottom: 10px;
}

textarea{
height:100% ;
}
img{
    height: 30px;
    width: 30px;
    filter: invert(68%) sepia(90%) saturate(11%) hue-rotate(314deg) brightness(90%) contrast(87%);
    position: absolute;
    right:20px;
    top:17px;
    cursor: pointer;
    
}
img::hover{
    filter: invert(55%) sepia(22%) saturate(4374%) hue-rotate(323deg) brightness(112%) contrast(111%);
}

    
}
`
export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;

    &.end {
        width:100%;
        justify-content: flex-end;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`