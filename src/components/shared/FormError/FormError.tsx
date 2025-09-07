import type React from "react";

type FormErrorProps = {
    children: React.ReactNode;
}

const FormError = ({children}: FormErrorProps) => {
  return (
    <p className="text-red-600 p-3 text-sm">
        {children}
    </p>
  )
}

export default FormError