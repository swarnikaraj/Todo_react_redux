import styled from "styled-components"

export const Parentdiv=styled.div`
background-color:#282C34;
border-radius:20px;
padding:20px;
margin:20px 50px;

heigh:400px;
text-alignment:center;
align-contents:center;
box-shadow:  5px 5px 15px #d9d9d9,
             -5px -5px 15px #ffffff;

&>.parent{display: grid;
border-radius:20px;
grid-template-columns: 65% 25%;
grid-gap:5%;}
&>.btns{margin-right:200px;padding-bottom:10px;}
`
export const LeftP=styled.div`
display: grid;
border-radius:10px;
  grid-template-columns: repeat(3,165px );
  grid-gap:20px;
  grid-template-rows: repeat(4,160px );
  padding:10px;
  
background:#20232A;
&>div{box-shadow: 2px 2px 2px 1px rgba(250, 250,250, 0.2);
background-color:#282C34;

}


&>div>p{margin:10px;}
&>div>p>button{margin:2px;}
`


export const RightP=styled.div`
background:#20232A;
padding:5px;
&>.form{padding:10px; border:2px solid}

.form>input{
    margin:2px;
    border-radius:6px;
    padding:2px 6px;
}

.form>textarea{
    padding:2px 6px;
}

`
