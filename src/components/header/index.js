import { ButtonLink, Background, Container, Group, Logo } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom'

export default function Header({ bg = true, children, ...restProps }) {
    return (
        bg ? (
            <Background {...restProps}>
                {children}
            </Background>
        ) : (
            children
        )
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink {...restProps}>
            {children}
        </ButtonLink>
    )
}

