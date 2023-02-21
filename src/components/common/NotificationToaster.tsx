import toast, { Toaster } from 'react-hot-toast'

type Props = {}

export const sucessNotify = () => ({ message }: { message: string }) => toast.success(message);
export const notify = () => ({ message }: { message: string }) => toast(message);
export const errorNotify = ({ message }: { message: string }) => toast.error(message);

const NotificationToaster = (props: Props) => {
    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                error: {
                    className: "bg-darky",
                    style: {
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px 20px",
                        minWidth: "200px"
                    }
                }
            }}
        />

    )
}

export default NotificationToaster