export type rowData = {
  id?: number;
  task?: string;
};

export interface DeleteModal {
  setIsDelete: Function;
  openDeleteModal: boolean;
  setOpenDeleteModal: Function;
  handleDelete: () => void;
  rowData: { id?: number; task?: string };
}
export interface EditModal {
  saveEditData: Function;
  openEditModal: boolean;
  setOpenEditModal: Function;
  rowData: { id?: number; task?: string };
}

export interface Grid {
  task: { id: number; task: string }[];
  openModalDelete: Function;
  openModalEdit: Function;
}
