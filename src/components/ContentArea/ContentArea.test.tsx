import { render, screen } from "@testing-library/react"
import ContentArea from "./ContentArea"

describe("<Container />", () => {
    it("should have viewport height & width", () => {
        render(<ContentArea>Test Container</ContentArea>)

        const classList = screen.getByTestId("content-area").classList
        expect(classList).toContain("h-screen")
        expect(classList).toContain("w-screen")
    })
})