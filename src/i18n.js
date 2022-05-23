
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "toast_message": {
                "success": {
                    "file_download_success": "file download with success"

                },
                "errors": {
                    "size_image": "the size image not be than of 1mb",
                    "format_not_allowed": "Format image not allowed",

                }

            },
            "bread_crumb": {
                "home": "Home",
                "profile": "Profile"
            },
            "login": {
                "subtitle": "Finally, All my links in one place!",
                "terms": "terms",
                "privacy": "Privacy",
                "helps&contact": "Helps & Contact",
                "your platform to share links!": "Your platform to share links!",
                "email": "Email",
                "password": "password",
                "remember_me": "remember me",
                "forget_your_password?": "forget your password?",
                "log_in": "log in",
                "don't_have_account?": "Don't have account?",
                "sign_up_now!": "Sign up Now!",
            },
            "register": {
                "back_to_login": "Back to Login",
                "name": "Name",
                "nickname": "Nickname",
                "email": "Email",
                "password": "Password",
                "confirm_password": "Confirm password",
                "register": "Register",
                "i_already_have_account": "I already have account."
            },
            "forget_password": {
                "title": "Forget my password!",
                "subtitle": "Enter your email below so we can send you a link to your email with instructions to change your password.",
                "email": "Email",
                "send_email": "SEND EMAIL",
                "back_to_login": "Back to Login Page."
            },
            "home": {
                "tooltip": {
                    "change_theme": "Change Theme",
                    "account_settings": "Account Settings",
                    "send_the_url_with_your_followers": "Send the url with your followers",
                },
                "menu": {
                    "settings": "Settigns",
                    "log_out": "Logout"
                },
                "buttons": {
                    "add_link": "Add link",
                    "profile": "Profile",
                    "copy_url": "Copy URL"
                },
                "tabs": {
                    "all": "All",
                    "social": "Social",
                    "payment": "Payment",
                    "contact": "Contact"
                },
                "ellips_menu": {
                    'export_to_excel': "Export to excel"
                },


            },
            "modal": {
                "all": "All",
                "social": "Social",
                "payment": "Payment",
                "contact": "Contact"
            },
            "drawer": {
                "delete_url": "Delete",
                "copy_link": "Copy Link",
                "settings": "settings",
                "logout": "Logout"
            },
            "profile": {
                "account_information": "Account Information",
                "change_photo": "Change photo",
                "file_name_not_provided": "File name not Provided",
                "name": "Name",
                "email": "Email",
                "nickname": "Nickname",
                "description": "Description",
                "buttons": {
                    "save_changes": "Save Changes",
                    "add_link": "Add link",
                    "back_to_home": "Back to Home",
                    "copy_url": "Copy URL"
                }
            },
            "qrcode": {
                "back": "Back",
                "subtitle": "Bring the camera closer to your device to access this profile."
            },
            "not_found_link": {
                "link_not_found": "Link not Found.",
                "no_add_link": "Profile owner has not added a link to this section",
                "your_probably": "You probably haven't added any links to this section."
            },


        }
    },
    pt: {
        translation: {
            "toast_message": {
                "success": {
                    "file_download_success": "Arquivo baixado com sucesso!"

                },
                "errors": {
                    "size_image": "O Arquivo não pode ser maior que 1mb.",
                    "format_not_allowed": "Formato de imagem não permitido.",

                }
            },
            "bread_crumb": {
                "home": "Home",
                "profile": "Perfil"
            },
            "login": {
                "subtitle": "Finalmente. todos os links em um só lugar",
                "terms": "termos",
                "privacy": "Privacidade",
                "helps&contact": "Ajuda & Contato",
                "your platform to share links!": "Sua plataforma de compartilhamento de links.",
                "email": "Email",
                "password": "Senha",
                "remember_me": "Lembrar de mim",
                "forget_your_password?": "Esqueceu sua senha?",
                "log_in": "Entrar",
                "don't_have_account?": "Ainda não tem uma conta?",
                "sign_up_now!": "Cadastre-se agora!",
            },
            "register": {
                "back_to_login": "Voltar Para Login",
                "name": "Nome",
                "nickname": "Apelido",
                "email": "Email",
                "password": "Senha",
                "confirm_password": "Confirmar Senha",
                "register": "Registrar",
                "i_already_have_account": "Eu já tenho uma conta."
            },
            "forget_password": {
                "title": "Esqueci minha senha!",
                "subtitle": "Digite seu e-mail abaixo para que possamos enviar um link para seu e-mail com instruções para alterar sua senha.",
                "email": "Email",
                "send_email": "ENVIAR EMAIL",
                "back_to_login": "Voltar para a página de login."
            },
            "home": {
                "tooltip": {
                    "change_theme": "Mudar Tema",
                    "account_settings": "Configurações da conta",
                    "send_the_url_with_your_followers": "Envie este link para seus seguidores",
                },
                "menu": {
                    "settings": "Configurações",
                    "log_out": "Sair"
                },
                "buttons": {
                    "add_link": "Adicionar Link",
                    "profile": "Perfil",
                    "copy_url": "Copiar link"
                },
                "tabs": {
                    "all": "Tudo",
                    "social": "Social",
                    "payment": "Pagamento",
                    "contact": "Contato"
                },
                "ellips_menu": {
                    'export_to_excel': "Exportar para excel"
                },


            },
            "modal": {
                "all": "Todos",
                "social": "Social",
                "payment": "Pagamentos",
                "contact": "Contato"
            },
            "drawer": {
                "delete_url": "Remover",
                "copy_link": "Copiar Link",
                "settings": "Configuração",
                "logout": "Sair"
            },
            "profile": {
                "account_information": "Informações da conta",
                "change_photo": "Mudar foto",
                "file_name_not_provided": "Nome de arquivo não informado",
                "name": "Nome",
                "email": "Email",
                "nickname": "Apelido",
                "description": "Descrição",
                "buttons": {
                    "save_changes": "Salvar mudaças",
                    "add_link": "Adicionar Link",
                    "back_to_home": "Voltar para Home",
                    "copy_url": "Copiar Link"
                }
            },
            "qrcode": {
                "back": "Voltar",
                "subtitle": "Aproxime a câmera perto para acessar o perfil."
            },
            "not_found_link": {
                "link_not_found": "Link não encontrado.",
                "no_add_link": "O Dono do perfil ainda não adicionou um link nesta seção",
                "your_probably": "Você Provavelmente não adicional um link nesta seção"
            },

        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "pt", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;