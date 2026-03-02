import {
    Section,
    Button,
} from "./UI";

const FinalCTA = ({ onPageChange }) => {
    return (
        <>
            <Section className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
                    Ready to See It for Yourself?
                </h2>
                <Button
                    variant="primary"
                    className="text-xl px-10 py-5 mx-auto"
                    onClick={() => onPageChange('book-a-demo')}
                >
                    Book Your Free Demo Call
                </Button>
            </Section>
        </>
    )
}

export default FinalCTA