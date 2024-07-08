import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
      test("Testar o textarea", () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target:{
                value: 'Testando o textarea'
            }
        })
        expect(screen.getByTestId('post-comments-textarea').innerHTML).toContain('Testando o textarea')
      })
    test('Deve adicionar um comentário', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target:{
                value: 'Testando Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('post-comments-submit'))
        expect(screen.getByTestId('post-comment-li')).toBeInTheDocument()
    })

    test('Deve Adicionar vários Comentários', () => {
        render(<PostComment />)
        //Comentário 1
        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target:{
                value: 'Testando Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('post-comments-submit'))
        //Comentário 2

        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target:{
                value: 'Testando Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('post-comments-submit'))
        expect(screen.getAllByTestId('post-comment-li').length).toBe(2)
    })
})