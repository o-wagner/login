import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function SignIn() {
    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri:
                    'https://th.bing.com/th/id/R.16034aa499468dcc29e0c3f4c190bdb7?rik=XMRlZRGfRElTEw&pid=ImgRaw&r=0',
            }}
            resizeMode="stretch"
        >
            <Text style={styles.title}>Bem-vindo</Text>

            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu melhor e-mail"
                    keyboardType='email-address'
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha secreta"
                    textSecurityEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.label, { textAlign: 'center' }]}>Cadastre-se grátis!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#43425D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    form: {
        marginTop: 30,
        width: '70%',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 12,
        marginTop: 20,
        marginLeft: 10,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderRadius: 20,
        padding: 12,
    },
    button: {
        backgroundColor: '#4dc15f',
        height: 40,
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }

});
