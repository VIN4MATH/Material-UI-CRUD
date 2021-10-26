import React, { useState } from "react";
import EmployeesForm from "./EmployeesForm";
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TablePagination, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../Components/useTable";
import * as EmployeeService from "../../Services/EmployeeServices"
import InputCnt from "../../Components/Controls/Input";
import { EditOutlined, Search } from "@material-ui/icons";
import ButtonsCnt from "../../Components/Controls/Buttons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../Components/Controls/Popup";
import ActionButtons from "../../Components/Controls/ActionButtons";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Notification from "../../Components/Controls/Notification";
import ConfirmDailog from "../../Components/Controls/ConfirmDailog";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'

  }
}))

const headCells = [
  { id: 'fullName', label: "Employee Name" },
  { id: 'email', label: "Email Address (Personal)" },
  { id: 'mobile', label: "Mobile Number" },
  { id: 'department', label: "Department", disableSorting: true },
  { id: 'actions', label: "Actions", disableSorting: true },
]


export default function Employees() {
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterpagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0)

      EmployeeService.insertEmployee(employee)
    else
      EmployeeService.updateEmployee(employee)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(EmployeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'submitted Successfully',
      type: 'success'
    })
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  const onDelete = id => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen:false
    })
    EmployeeService.deleteEmployee(id);
    setRecords(EmployeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
    })


  }

  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design with Validation"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />


      <Paper square elevation={1} className={classes.pageContent} >


        <Toolbar>
          <InputCnt
            className={classes.searchInput}
            label="Search Employee"
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <ButtonsCnt
            className={classes.newButton}
            text="Add New"
            variant="contained"
            size="large"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
          />


        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>

            {
              recordsAfterpagingAndSorting().map(item =>
              (<TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <ActionButtons
                    color="primary">
                    <EditOutlinedIcon fontSize="small"
                      onClick={() => { openInPopup(item) }} />
                  </ActionButtons>
                  <ActionButtons
                    color="secondary">
                    <CloseIcon fontSize="small"
                      onClick={() => {

                        setConfirmDialog({
                          isOpen: true,
                          title: 'Are You Sure To Delete The Record',
                          subTitle: "You Can't Undo The Operation",
                          onConfirm: () => { onDelete(item.id) }
                        })
                      }} />
                  </ActionButtons>


                </TableCell>



              </TableRow>)
              )
            }

          </TableBody>


        </TblContainer>
        <TblPagination />




      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeesForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />

      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
      <ConfirmDailog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
