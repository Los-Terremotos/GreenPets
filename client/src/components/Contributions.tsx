import styled from 'styled-components';

//Nestor Cayanan: Full Stack
//Kevin Phan: Full Stack
//Cristian Corrales: Front-End
//Matt Mattox: Front-End
//Stephanie Serrano: Back-End
//Jenny Schmalz: Back-End

const ContributionContainer = styled.div`
height: 100vh;
background-color: #a3b18a;
color: #344e41;
display: grid;
grid-template-rows: 1fr 1fr
grid-template-columns: 1fr;

    h1{
     text-align:center;
    }

    li{
        list-style: none;
        text-align:center;
    }
    .contributor-profile{
        grid-area: contributor
    }
`;
const ContributionImg = styled.img`
    width: 200px;
    border-radius: 60%;
`

const ContributorWrap = styled.div`
    display: flex;
    justify-content: space-around;
    a{
        color: #fff;
    }
`


const Contribution : React.FC = () =>{
    
    return(
    <ContributionContainer>
    <h1>Contributors</h1>
        <ContributorWrap>
        <div>
            <ContributionImg src = "../src/assets/contributors/kp.jpeg"/>
            <ul>
                <li>Kevin Phan</li>
                <li>Full Stack Engineer</li>
                <li><a href = "#">Github</a></li>
                <li><a href = "#">Linkedin</a></li>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/nestor.jpeg"/>
            <ul>
                <li>Nestor Cayanan</li>
                <li>Full Stack Engineer</li>
                <li><a href = "#">Github</a></li>
                <li><a href = "#">Linkedin</a></li>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/matt.jpeg"/>
            <ul>
                <li>Mathew Mattox</li>
                <li>Front-End Engineer</li>
                <li><a href = "#">Github</a></li>
                <li><a href = "#">Linkedin</a></li>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/cristian.jpeg"/>
            <ul>
                <li>Cristian Corrales</li>
                <li>Front-End Engineer</li>
                <li><a href = "https://github.com/crisdevs">Github</a></li>
                <li><a href = "https://github.com/crisdevs">Linkedin</a></li>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/jenny.jpeg"/>
            <ul>
                <li>Jenny Schmalz</li>
                <li>Back-End Engineer</li>
                <li><a href = "#">Github</a></li>
                <li><a href = "#">Linkedin</a></li>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/stephanie.jpeg"/>
            <ul>
                <li>Stephanie Serrano</li>
                <li>Back End Engineer</li>
                <li><a href = "#">Github</a></li>
                <li><a href = "#">Linkedin</a></li>
            </ul>
        </div>
        </ContributorWrap>
    </ContributionContainer>
    );
}

export default Contribution;