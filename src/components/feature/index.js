import { Container, Title, SubTitle } from './styles/feature'

export default function Feature({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}