export interface SignUp{
    name:string,
    password:string,
    email:string
}
export interface login{
    email: string,
    password: string
}

export interface product{
    name: string,
    price: number,
    color: string,
    discription: string,
    imageUrl: string,
    category: string,
    id: number
}