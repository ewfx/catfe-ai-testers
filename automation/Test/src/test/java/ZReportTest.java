import com.rajatthareja.reportbuilder.ReportBuilder;
import org.junit.Test;

import java.io.File;

public class ZReportTest {

    @Test
    public void report(){
        ReportBuilder rb = new ReportBuilder();
        rb.setReportDirectory("output/");
        rb.build(new File("output/report.json"));
    }
}
