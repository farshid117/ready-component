 const confirmDeleteHandler = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui bg-primary-subtle p-5 rounded-3' style={{ fontFamily: "Vazir" }} >
                        <h3 className='text-dark'>آیا مطمئن هستی</h3>
                        <p className='text-dark'>که میخواهی این کار را حذف کنی؟</p>

                        <button
                            className='btn btn-danger me-2'
                            onClick={() => {
                                removeHandler(id);
                                onClose();
                            }}
                        >
                            حذف کن
                        </button>
                        <button className='btn btn-secondary' onClick={onClose}>انصراف</button>
                    </div>
                );
            }
        });
}