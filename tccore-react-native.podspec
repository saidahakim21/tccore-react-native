require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = "tccore-react-native"
  s.version = "0.1.2"
  s.summary = "Beta bridge for TCCore library"
  s.description = <<-DESC
                  Commanders Act React Native Bridge
                   DESC
  s.homepage = "https://github.com/commandersact/tccore-react-native"
  s.license = { :type => "Commercial", :file => "LICENSE" }
  s.authors = { "CommandersAct" => "mobile@commandersact.com" }
  s.platforms = { :ios => "11.0" }
  s.source = { :git => "https://github.com/commandersact/tccore-react-native.git", :tag => "1.0.0" }
  s.source_files = "ios/**/*.{h,c,m,mm}"
  s.requires_arc = true
  s.swift_version = "5.0"
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES' }

  s.dependency 'React-Core'
  s.dependency 'IOSV5-TCCore', '5.2.5'

end

