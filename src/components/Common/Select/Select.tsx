/*node-modules*/
import styled from "styled-components";
import {useState} from "react";

/*icons*/
import SelectArrow from '../../../assets/icons/down-arrow.svg'
import {SelectItem} from "./SelectItem";

export type OptionType = {
    label: string,
    value: string | number
}

type SelectProps = {
    value: OptionType | null,
    width: string,
    defaultValue?: string,
    changeValue: any,
    options: OptionType[]
}
type SelectElementProps = {
    width: string,
    isOpen: boolean
}

const SelectElement = styled.div<SelectElementProps>`
  height: 40px;
  width: ${({width}) => width};
  border-radius: 10px;
  border: none;
  background-color: #F8F8F7;
  border: ${({isOpen}) => isOpen ? "2px solid #FBE0DC" : "none"};
  background-image: url(${SelectArrow});
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position-x: ${({isOpen}) => isOpen ? "calc(100% - 8px)" : "calc(100% - 10px)"};
  background-position-y: 50%;
  -webkit-appearance: none;
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  color: #8C8C8C;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${({isOpen}) => isOpen ? "8px" : "10px"};

  &:hover {
    border: 2px solid #FBE0DC;
    padding-left: 8px;
    background-position-x: calc(100% - 8px);
  }
`;

type DropdownProps = {
    width: string,
    isOpen: boolean
}

const Dropdown = styled.div<DropdownProps>`
  width: ${({width}) => width};
  max-height: 380px;
  position: absolute;
  left: 0;
  top: 40px;
  display: ${({isOpen}) => isOpen ? "block" : "none"};
  background: #FFFFFF;
  border-radius: 10px;
  padding: 5px;
  z-index: 2;
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Select = ({width, defaultValue, options, changeValue, value}: SelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <SelectElement width={width} isOpen={isOpen} onClick={onClickHandler}>
            <p>{value ? value.label : defaultValue}</p>
            <Dropdown width={width} isOpen={isOpen}>
                {
                    defaultValue
                        ? <SelectItem onClick={() => changeValue(null)}>{defaultValue}</SelectItem>
                        : null
                }
                {
                    options ?
                        options.map((option, index) => <SelectItem
                                key={index}
                                onClick={() => changeValue(option)}
                            >
                                {option.label}
                            </SelectItem>
                        )
                        : <p>Loading...</p>
                }
            </Dropdown>
        </SelectElement>
    );
};