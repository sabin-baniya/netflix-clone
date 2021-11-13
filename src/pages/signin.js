import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/FirebaseContext'

export default function Signin({ children, ...restProps }) {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = email === '' || password === ''

    const signin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.BROWSE)
        } catch (e) {
            setError(e.message)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signin();
    }

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign In
                </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSubmit} method="POST">
                    <Form.Input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <Form.Input autoComplete="off" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <Form.Submit type="submit" disabled={isInvalid}>
                        Sign In
                    </Form.Submit>
                    <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link></Form.Text>

                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
    </>
}