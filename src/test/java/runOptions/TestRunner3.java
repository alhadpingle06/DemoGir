/**
 * 
 */
package runOptions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;

/**
 * @author alhad
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue = "stepDefinitions",
		tags = {"@something"},
		plugin = {"pretty", 
				"html:target/cucumber", 
//				"json:target/cucumber.json", 
				"junit:target/cucumber.xml",
				"json:target/report.json", 
				"de.monochromata.cucumber.report.PrettyReports:target/pretty-cucumber/TestRunner3-Reports"},
		monochrome = true,
		dryRun = false,
		strict = true,
		stepNotifications = true,
		snippets = SnippetType.UNDERSCORE
		)
public class TestRunner3 {

}
