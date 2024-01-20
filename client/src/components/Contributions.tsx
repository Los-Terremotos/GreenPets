import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

//Nestor Cayanan: Full Stack
//Kevin Phan: Full Stack
//Cristian Corrales: Front-End
//Matt Mattox: Front-End
//Stephanie Serrano: Back-End
//Jenny Schmalz: Back-End

const ContributionContainer = styled.div`
height: 100vh;
display: grid;
grid-template-rows: 1fr 1fr
grid-template-columns: 1fr;
background-color: #b6ad90;

color: #fff;

    h1{
     text-align:center;
     padding-top:50px;
    }

    li{
        list-style: none;
        text-align:center;
    }
    .contributor-profile{
        grid-area: contributor
    }
    .contribution-icons{
        display: flex;
        font-size: 40px;
        justify-content: space-around;
    }

    .icon : hover{
        color:green
    }
`;
const ContributionImg = styled.img`
    width: 200px;
    border-radius: 60%;
`

const ContributorWrap = styled.div`
    display: flex;
    justify-content: space-around;
`


const Contribution : React.FC = () =>{
    
    return(
    <ContributionContainer id = "contribution">
    <h1>Contributors</h1>
        <ContributorWrap>
        <div>
            <ContributionImg src = "../src/assets/contributors/kp.jpeg"/>
            <ul>
                <li>Kevin Phan</li>
                <li>Full Stack Engineer</li>
                <div className = "contribution-icons">
                <li> <a href = "https://github.com/KP824"> <FontAwesomeIcon  className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/kp824/"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/nestor.jpeg"/>
            <ul>
                <li>Nestor Cayanan</li>
                <li>Full Stack Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/nestorcayananjr"><FontAwesomeIcon className="icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/nestorcayananjr/"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/matt.jpeg"/>
            <ul>
                <li>Matt Mattox</li>
                <li>Front-End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/heyitsmattox"><FontAwesomeIcon className="icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/mattmattox12/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/cristian.jpeg"/>
            <ul>
                <li>Cristian Corrales</li>
                <li>Front-End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/crisdevs"><FontAwesomeIcon className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/criscorr/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/jenny.jpeg"/>
            <ul>
                <li>Jenny Schmalz</li>
                <li>Back-End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/jennyschmalz"><FontAwesomeIcon className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/jennyschmalz/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/stephanie.jpeg"/>
            <ul>
                <li>Stephanie Serrano</li>
                <li>Back End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/stephanie-115"><FontAwesomeIcon className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/stephanie-t-serrano/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        </ContributorWrap>
    </ContributionContainer>
    );
}

export default Contribution;