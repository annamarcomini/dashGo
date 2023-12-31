  import { Header } from "../../components/Form/Header"
  import { Sidebar } from "@/components/Form/Sidebar"
  import { useForm, SubmitHandler, FieldError } from "react-hook-form"
  import { yupResolver } from "@hookform/resolvers/yup"
  import {
    Box,
    Flex,
    Heading,
    Divider,
    VStack,
    SimpleGrid,
    HStack,
    Button,
  } from "@chakra-ui/react"
  import { Input } from "@/components/Form/Input"
  import Link from "next/link"
  import * as yup from "yup"

  type CreateUserFormValue = {
    name: string
    email: string
    password: string
    password_confirmation: string
  }

  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "No mínimo 6 caracteres"),
    password_confirmation: yup.string()
      .equals([undefined, yup.ref("password")], "As senhas precisam ser iguais"),
  })


  export default function UserCreate() {
    const { register, handleSubmit, formState } = useForm<CreateUserFormValue>({
      resolver: yupResolver(createUserFormSchema)
    })

    

    const handleCreateUser: SubmitHandler<CreateUserFormValue>= async (values) =>{
    await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
      <Box>
        <Header />
        <Flex
          w="100%"
          my="6"
          maxWidth={1480}
          mx="auto"
          px="6"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Sidebar />
          <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8">
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>
            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  type="name"
                  label="Nome completo"
                  error={formState.errors.name}
                  {...register("name")}
                />
                <Input
                  type="email"
                  label="E-mail "
                  error={formState.errors.email}
                  {...register("email")}
                />
              </SimpleGrid>
            </VStack>

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  type="password"
                  label="Senha"
                  error={formState.errors.password}
                  {...register("password")}
                />
                <Input
                  type="password"
                  label="Confirmação da senha"
                  error={formState.errors.password_confirmation}
                  {...register("password_confirmation")}
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={formState.isSubmitting} //visualizar sinal de carregamento
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    )
  }
