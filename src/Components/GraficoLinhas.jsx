import { ChartComponent, Inject, SeriesCollectionDirective, LineSeries, SeriesDirective, Category, Legend } from "@syncfusion/ej2-react-charts"
//https://ej2.syncfusion.com/react/documentation/chart/getting-started/

export default function GraficoLinhas(props) {
    return (
        <div>
            <ChartComponent primaryXAxis={{ valueType: "Category" }} title='Análise de Vendas'>
                <Inject services={[LineSeries, Category, Legend]} />
                <SeriesCollectionDirective>
                    {props.data.map((bairro, index) =>
                        <SeriesDirective
                            key={index}
                            type="Line"
                            dataSource={bairro.value}
                            xName="month"
                            yName="sales"
                            name={bairro.label}
                        />
                    )}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )

}