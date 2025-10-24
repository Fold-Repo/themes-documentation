import FeatureCard from "@/components/cards/FeatureCard"
import { whyChoose } from "@/data/home"

interface WhyChooseProps {
  iconColor?: string
}

const WhyChoose = ({ iconColor = '#2D2F5C' }: WhyChooseProps) => {
  return (
    <div className="py-14">

      <div className="container">

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center font-grotesk mb-10">
          {whyChoose.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {whyChoose.features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={iconColor}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default WhyChoose