import { useState, createContext, useContext } from 'react';
import { Body, Container, Header, Inner, Item, Title } from './styles/accordion';

const accordionContext = createContext();

const handleToggle = (setToggle, toggle) => {
    setToggle(!toggle);
}

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggle, setToggle] = useState(false);

    return <accordionContext.Provider value={{ toggle, setToggle }}>
        <Item {...restProps} >{children}</Item>
    </accordionContext.Provider>

}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggle } = useContext(accordionContext);

    return <Body {...restProps} className={toggle ? 'open' : 'closed'} >
        <span>
            {children}
        </span>
    </Body >
        ;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps} >{children}</Title>

}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggle, setToggle } = useContext(accordionContext);

    return <Header {...restProps} onClick={() => handleToggle(setToggle, toggle)}>
        {children}
        {toggle ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
            <img src="/images/icons/add.png" alt="Open" />
        )}

    </Header>

}
