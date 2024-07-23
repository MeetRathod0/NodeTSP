import path from "app-root-path";

const app_root_path = path.path;

export default app_root_path;
export const messages = {
    get_data: 'Successufully fetch records.',
    insert: 'Record inserted successfully.',
    update: 'Record updated successfully.',
    delete: 'Record deleted successfully.',
    fail_insert: 'Insertion is failed.',
    fail_update: 'Updation is failed.',
    fail_delete: 'Deletion is failed.'
};