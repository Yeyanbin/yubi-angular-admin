import { ILayout } from '@interface/config';


// tslint:disable:no-unused-expression
export const getLayout = (
  controlSpan: number = 24,
  labelSpan: number = 0,
  classArray: string[] = [],
  styleArray: { [key: string]: string } = {}
): ILayout => {
  controlSpan > 24 && (controlSpan = 24);
  return {
    controlSpan,
    labelSpan,
    offset: 24 - controlSpan - labelSpan,
    class: classArray,
    style: styleArray
  };
};
