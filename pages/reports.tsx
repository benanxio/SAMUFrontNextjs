import Layout from "@/src/apps/Layouts/Layout";
import useReports from "@/src/apps/Reports/hooks/useReports";

import { Chart, ChartWrapperOptions } from "react-google-charts";

export const options: Partial<ChartWrapperOptions["options"]> = {
  colors: ["#393e46", "#f96d00"],
  chart: {
    title: "Reporte de Atenciones y Atendidos ",
    subtitle:
      "Es el reporte del mes de Febrero del año 2023 por cada establecimiento",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },

  vAxis: {
    title: "Establecimiento",
  },
  bars: "horizontal",
  axes: {
    y: {
      0: { side: "left" },
    },
  },
};

const Example = () => {
  const {
    atendidos_atenciones,
    loadingAtendidosAtenciones,
    registrosNuevosReingresantesOkFail,
    loadingRegistrosNuevosReingresantesOkFail,
  } = useReports();

  const transformedData: any = atendidos_atenciones?.map((obj: any) => [
    obj.Nombre_Establecimiento,
    obj.Atendidos,
    obj.Atenciones,
  ]);

  transformedData.unshift([
    "Nombre del Establecimiento",
    "Atendidos",
    "Atenciones",
  ]);

  const total = registrosNuevosReingresantesOkFail?.length || 0;
  const okCount: any = registrosNuevosReingresantesOkFail?.filter(
    (item: any) => item.indicador === "OK"
  ).length;
  const failCount = total - okCount;

  const newDataOkFail = registrosNuevosReingresantesOkFail
    ?.slice(0, 100)
    .map((item: any) => [item.numero_documento, item.total_n, item.total_r]);

  newDataOkFail?.unshift([
    "DNI",
    "Cantidad de veces como R",
    "Cantidad de veces como N",
  ]);
  return (
    <Layout screenLoader={false}>
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
        {!loadingAtendidosAtenciones && (
          <Chart
            key={1}
            height={500}
            width={500}
            chartType="Bar"
            data={transformedData}
            options={options}
          />
        )}

        {!loadingAtendidosAtenciones && (
          <Chart
            key={2}
            height={500}
            width={400}
            chartType="PieChart"
            data={transformedData}
            options={options}
          />
        )}
      </div>

      <div className="mt-5 flex flex-col md:flex-row  justify-center items-center justify-items-center">
        {!loadingRegistrosNuevosReingresantesOkFail && (
          <Chart
            chartType="PieChart"
            height={400}
            width={400}
            data={[
              ["Indicador OK FAIL", "Cantidad"],
              ["Ok", okCount],
              ["Fail", failCount],
            ]}
            options={{
              title: "Porcentaje de error de Registro",
              pieHole: 0.4,
              is3D: false,
            }}
          />
        )}
        {!loadingRegistrosNuevosReingresantesOkFail && (
          <Chart
            chartType="Table"
            height={200}
            width={500}
            data={newDataOkFail}
            options={{
              title: "Marge de Error",
              pieHole: 0.4,
              is3D: false,
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export default Example;
