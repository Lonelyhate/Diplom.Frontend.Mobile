import { Ionicons } from '@expo/vector-icons';
import { TypeRootStackParamList } from 'navigation/navigation.types';

export interface IMenuItem {
    iconName: keyof typeof Ionicons.glyphMap
    path: keyof TypeRootStackParamList
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void;