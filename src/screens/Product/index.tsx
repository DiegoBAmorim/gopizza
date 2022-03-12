import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';

import {ButtonBack} from '../../components/ButtonBack';
import {Photo} from '../../components/Photo';

import {Container, Header, Title, DeleteLabel} from './styles';

export function Product() {
    return(
        <Container
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        <Header>
            <Title>Cadastrar</Title>
            <TouchableOpacity>
                <ButtonBack onPress={() => {}}/>
                <DeleteLabel>Deletar</DeleteLabel>
            </TouchableOpacity>
        </Header>
        <Photo uri="https://github.com/rodrigorgtic.png" />
        </Container>
    )
}