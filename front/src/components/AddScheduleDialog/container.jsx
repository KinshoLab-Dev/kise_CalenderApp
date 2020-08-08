import AddScheduleDialog from "./presentation";
import {
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule }
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);