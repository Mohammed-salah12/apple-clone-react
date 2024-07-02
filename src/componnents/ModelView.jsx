import { View } from "@react-three/drei"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            <ambientLight intensity={0.3} />
            <perspectiveCamera makeDefault position={[0, 0, 4]} />
        </View>
    )
}
export default ModelView
