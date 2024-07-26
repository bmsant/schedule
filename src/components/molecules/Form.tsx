import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface Field {
    name: string;
    type: string;
    placeholder: string;
}

interface FormProps {
    fields: Field[];
    formData: { [key: string]: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    className?: string;
}

export default function Form({ fields, formData, onChange, onSubmit, className }: FormProps) {
    return (
        <form onSubmit={onSubmit} className={className}>
            {fields.map((field) => (
                <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={onChange}
                    name={field.name}
                />
            ))}
            <Button variant="primary">Submit</Button>
        </form>
    );
}