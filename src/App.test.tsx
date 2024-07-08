import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Testes para o componente Principal App", () => {
    test("Deve Renderizar Corretamente", () => {
        render( <App/> )
        expect(screen.getByTestId("post-text")).toBeInTheDocument()
    })
})