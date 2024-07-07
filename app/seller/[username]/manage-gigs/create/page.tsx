import { CreateForm } from "./_components/create-form";

interface CreateGigProps {
    params: {
        username: string;
    }
}

const CreateGig = ({
    params
}: CreateGigProps) => {
    <div className="flex justify-center">
        <CreateForm
            username={params.username}
        />
    </div>
}
export default CreateGig
