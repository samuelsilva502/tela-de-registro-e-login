import React from "react";
import * as Components from './components';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Cadraste-se</Components.Title>
                     <Components.Input type='text' placeholder='Nome' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='Senha' placeholder='Senha' />
                     <Components.Button>Cadastrar</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Login</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='Senha' placeholder='Senha' />
                      <Components.Anchor href='#'>Esqueceu a senha?</Components.Anchor>
                      <Components.Button>Entrar</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Bem-vindo de volta!</Components.Title>
                     <Components.Paragraph>
                         Para se conectar conosco faça login com as suas informações pessoais! 
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Login
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Bem-vindo!</Components.Title>
                       <Components.Paragraph>
                         Insira seus dados pessoais e comece a sua jornada conosco!
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Cadraste-se
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;