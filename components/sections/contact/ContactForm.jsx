import Button from '@/components/common/Button'
import React from 'react'

const ContactForm = () => {
    return (
        <form className="w-full md:w-[calc(50%-50px)] mx-auto mb-10">
            <FormField label="Email">
                <Input type="email" />
            </FormField>
            <FormField label="Subject">
                <Input />
            </FormField>
            <FormField label="Message">
                <TextArea />
            </FormField>
            <Button className="px-8 mt-1 hover:bg-fern hover:text-blue-dianne" isLink={false}>Send</Button>
        </form>
    )
}

const FormField = ({
    label = '',
    children
}) => {
    return (
        <div className="flex flex-col gap-[5px] mb-3">
            <label htmlFor="" className="text-base font-semibold font-poppins">{label}</label>
            {children}
        </div>
    )
}

const inputClassName = "outline-none border-[1px] border-solid border-junglemist py-[2px] px-2 rounded-[5px] text-sm font-medium font-poppins text-blue-dianne h-[36px] focus:shadow-[0 0 0 1.5px] focus:shadow-fern focus:border-fern"
const Input = ({ type = "text", ...props }) => (
    <input
        {...props}
        type={type}
        className={`h-[36px] ${inputClassName}`}
    />
)
const TextArea = ({ ...props }) => (
    <textarea
        className={`h-[120px] min-h-[50px] resize-y ${inputClassName}`}
    />
)

export default ContactForm