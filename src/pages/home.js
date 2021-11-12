import { JumbotronContainer } from '../containers/JumbotronContainer'
import { FooterContainer } from '../containers/FooterContainer'
import { AccordionContainer } from '../containers/AccordionContainer'

const home = () => {
    return (
        <>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}

export default home