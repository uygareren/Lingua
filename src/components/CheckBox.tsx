import { Checkbox, FormControl } from "native-base";
import {
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import { TEXT_BLACK } from "../utils/colors";

type CheckBoxParams = {
    value: boolean;
    onChangeValue: any;
    requiredError?: boolean;
    requiredMessage?: string;
    styleContainer?: ViewStyle;
    styleInput?: ViewStyle;
    styleText?: TextStyle;
    text?: string;
    disabled?: boolean;
  };

export const CheckBoxComp = ({
    value,
    onChangeValue,
    text = '',
    requiredError = false,
    requiredMessage,
    styleContainer,
    styleInput,
    disabled = false,
  }: CheckBoxParams) => {
  
    return (
      <FormControl isInvalid={requiredError} style={{...styleContainer}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => onChangeValue(!value)}
          disabled={disabled}>
          <Checkbox
            style={{...styleInput}}
            isDisabled={disabled}
            colorScheme="primary"
            _text={{width: '100%', fontSize: 12, color: TEXT_BLACK}}
            value="danger"
            isChecked={value}
            onChange={() => onChangeValue(!value)}>
            {text}
          </Checkbox>
        </TouchableOpacity>
        <FormControl.ErrorMessage>
          {requiredMessage || 'Boş Bırakmayınız'}
        </FormControl.ErrorMessage>
      </FormControl>
    );
  };