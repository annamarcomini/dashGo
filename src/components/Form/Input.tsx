import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction} from "react"
import {FieldError} from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const Inputbase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        type="email"
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref} // Usando a tipagem correta para o ref
        {...rest}
      />

      {!!error && ( //mostrar msg de erros
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
  )}
    </FormControl>
  )
}

export const Input = forwardRef(Inputbase)
