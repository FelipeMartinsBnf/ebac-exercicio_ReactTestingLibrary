import { render, screen } from "@testing-library/react"
import Post from ".."

describe("Testes para o componente de Post" , () => {
    test("Deve renderizar corretamente", () => {
        render(
        <Post imageUrl="...">
            Teste-Post
        </Post>)
        expect(screen.getByText("Teste-Post")).toBeInTheDocument()
    })
})