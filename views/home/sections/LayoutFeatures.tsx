import { layoutFeatures } from '@/data/home'

const LayoutFeatures = () => {
    return (
        <div className="pb-14 space-y-10">

            <div className="w-full bg-[#2D2F5C] flex items-center justify-center text-center py-10">

                <div className="max-w-lg mx-auto">
                    <h2 className="text-white text-base md:text-lg font-medium text-center leading-relaxed">
                        {layoutFeatures.title}
                    </h2>
                </div>

            </div>

            <div className="container">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {layoutFeatures.features.map((feature) => (
                        <div 
                            key={feature.id}
                            className="bg-white flex flex-col items-center justify-center 
                            text-center space-y-3 border border-[#ECECEC] shadow-[0px_6px_12px_-1px_rgba(32,32,32,0.04)] rounded-xl p-6 md:px-10 py-12 md:py-16">

                            <div className="flex items-center justify-center bg-[#2D2F5C] w-10 h-10 text-center p-6 rounded-md mb-7">
                                <p className="text-white text-base font-medium">{feature.count}</p>
                            </div>

                            <p className="text-sm sm:text-base leading-6 max-w-sm mx-auto">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default LayoutFeatures

