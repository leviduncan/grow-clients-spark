import {
    Phone,
} from "./UI";

const DemoBar = () => {
    return (
        <>
            <div className="bg-secondary py-6 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                    <div className="flex items-center gap-3">
                        <Phone className="animate-bounce" />
                        <span className="font-bold text-lg">Call our AI right now:</span>
                    </div>
                    <a href="tel:+1484600600" className="text-3xl md:text-4xl font-black hover:text-accent transition-colors">
                        (484) 600-6010
                    </a>
                    <p className="text-white/70 text-sm md:text-base">
                        This is a live AI answering right now. Call and hear it yourself.
                    </p>
                </div>
            </div>
        </>
    )
}

export default DemoBar