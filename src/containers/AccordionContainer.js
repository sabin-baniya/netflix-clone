import { Accordion } from "../components";
import faq from '../fixtures/faqs.json'
import { OptForm } from '../components'

export const AccordionContainer = ({ children, ...restProps }) => {
    return (
        <Accordion {...restProps}>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faq.map(({ id, header, body }) => {

                return (
                    <Accordion.Item key={id}>
                        <Accordion.Header>
                            {header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {body}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email Address" type="email" />
                <OptForm.Button>
                    Get Started
                </OptForm.Button>
            </OptForm>
        </Accordion>
    )
}