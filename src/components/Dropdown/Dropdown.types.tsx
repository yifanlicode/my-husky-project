export interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
  defaultValue?: string;
  disabled?: boolean;
}

export default DropdownProps;
