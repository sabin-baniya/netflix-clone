import { JumbotronContainer } from '../containers/JumbotronContainer'
import { FooterContainer } from '../containers/FooterContainer'
import { AccordionContainer } from '../containers/AccordionContainer'
import { HeaderContainer } from '../containers/HeaderContainer'
import { Feature, OptForm } from '../components'

const home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Break />
                    <OptForm.Input placeholder="Email Address" type="email" />
                    <OptForm.Button>
                        Get Started
                    </OptForm.Button>
                </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}

export default home