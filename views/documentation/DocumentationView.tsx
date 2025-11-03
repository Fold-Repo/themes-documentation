import { Footer } from '@/components'
import { DocBanner, DocDemo, WhyChooseUs } from './section'

const DocumentationView = () => {
    return (
        <>

            <DocBanner />

            <WhyChooseUs />

            <DocDemo />

            <Footer bgColor='bg-[#DB4444]' />

        </>
    )
}

export default DocumentationView