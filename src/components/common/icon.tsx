import Ionicons from '@expo/vector-icons/Ionicons';

type IoniconProps = {
    name: string;
    size: number;
    color: string;
}

export const Ionicon: React.FC<IoniconProps> = ({name, size, color}) => {
    return (
        <Ionicons name={name} size={size} color={color}/>
    )
}