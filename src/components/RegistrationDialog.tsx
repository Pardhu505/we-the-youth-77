import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z.coerce.number().int().positive({ message: "Age must be a positive number" }),
  gender: z.enum(["Male", "Female", "Prefer not to say"]),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z.string().min(10, { message: "Mobile number must be at least 10 digits" }),
  state: z.string().min(1, { message: "State is required" }),
  district: z.string().min(1, { message: "District is required" }),
  isStudent: z.enum(["Yes", "No"]),
  academicCategory: z.string().optional(),
  degree: z.string().optional(),
  yearOfStudy: z.string().optional(),
  isWorkingProfessional: z.enum(["Yes", "No"]),
  organisation: z.string().optional(),
  role: z.string().optional(),
  isSelfEmployed: z.boolean().optional(),
  workDescription: z.string().optional(),
  howDidYouHear: z.string().min(1, { message: "This field is required" }),
  roleToTake: z.string().min(1, { message: "This field is required" }),
  skills: z.array(z.string()).optional(),
  hoursPerWeek: z.string().min(1, { message: "This field is required" }),
  changeToSee: z.string().min(1, { message: "This field is required" }),
  whyJoin: z.string().min(1, { message: "This field is required" }),
  optInWhatsApp: z.enum(["Yes", "No"]),
  isPoliticallyActive: z.enum(["Yes", "No", "Maybe"]),
  hasContestedElections: z.enum(["Yes", "No"]).optional(),
  desireToContest: z.enum(["Yes", "No", "Maybe"]).optional(),
  contestedElectionsDetails: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export function RegistrationDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0,
      email: "",
      mobileNumber: "",
      state: "",
      district: "",
      academicCategory: "",
      degree: "",
      yearOfStudy: "",
      organisation: "",
      role: "",
      isSelfEmployed: false,
      workDescription: "",
      howDidYouHear: "",
      roleToTake: "",
      skills: [],
      hoursPerWeek: "",
      changeToSee: "",
      whyJoin: "",
      contestedElectionsDetails: "",
      agreeToTerms: false,
    },
  });

  const isStudent = form.watch("isStudent");
  const isWorkingProfessional = form.watch("isWorkingProfessional");
  const isSelfEmployed = form.watch("isSelfEmployed");
  const isPoliticallyActive = form.watch("isPoliticallyActive");
  const hasContestedElections = form.watch("hasContestedElections");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registration Form</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter your age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Male" />
                        </FormControl>
                        <FormLabel>Male</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Female" />
                        </FormControl>
                        <FormLabel>Female</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Prefer not to say" />
                        </FormControl>
                        <FormLabel>Prefer not to say</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email ID</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your mobile number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "Andhra Pradesh",
                        "Arunachal Pradesh",
                        "Assam",
                        "Bihar",
                        "Chhattisgarh",
                        "Goa",
                        "Gujarat",
                        "Haryana",
                        "Himachal Pradesh",
                        "Jharkhand",
                        "Karnataka",
                        "Kerala",
                        "Madhya Pradesh",
                        "Maharashtra",
                        "Manipur",
                        "Meghalaya",
                        "Mizoram",
                        "Nagaland",
                        "Odisha",
                        "Punjab",
                        "Rajasthan",
                        "Sikkim",
                        "Tamil Nadu",
                        "Telangana",
                        "Tripura",
                        "Uttar Pradesh",
                        "Uttarakhand",
                        "West Bengal",
                        "Andaman and Nicobar Islands",
                        "Chandigarh",
                        "Dadra and Nagar Haveli and Daman and Diu",
                        "Delhi",
                        "Jammu and Kashmir",
                        "Ladakh",
                        "Lakshadweep",
                        "Puducherry",
                      ].map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your district" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isStudent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isStudent === "Yes" && (
              <>
                <div className="col-span-2">
                  <h3 className="text-lg font-medium">Academic Details</h3>
                </div>
                <FormField
                  control={form.control}
                  name="academicCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Academic Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your academic category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Medicine & Surgery">
                            Medicine & Surgery
                          </SelectItem>
                          <SelectItem value="Professional Degrees">
                            Professional Degrees (CA, ICWA, CMA, CS, FIAI, etc.)
                          </SelectItem>
                          <SelectItem value="Commerce, Economics, Finance & Management">
                            Commerce, Economics, Finance & Management
                          </SelectItem>
                          <SelectItem value="Engineering, Technology, Science & Agriculture">
                            Engineering, Technology, Science & Agriculture
                          </SelectItem>
                          <SelectItem value="Arts, Humanities, Law, Design & Education">
                            Arts, Humanities, Law, Design & Education
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specify your degree</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., B.A. Economics"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Study</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year of study" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1st Year">1st Year</SelectItem>
                          <SelectItem value="2nd Year">2nd Year</SelectItem>
                          <SelectItem value="3rd Year">3rd Year</SelectItem>
                          <SelectItem value="4th Year">4th Year</SelectItem>
                          <SelectItem value="5th Year">5th Year</SelectItem>
                          <SelectItem value="Postgraduate">
                            Postgraduate
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Professional Details</h3>
            </div>
            <FormField
              control={form.control}
              name="isWorkingProfessional"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Working Professional?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isWorkingProfessional === "Yes" && (
              <>
                <FormField
                  control={form.control}
                  name="organisation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organisation</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your organisation"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your role" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <FormField
              control={form.control}
              name="isSelfEmployed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Self Employed</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {isSelfEmployed && (
              <FormField
                control={form.control}
                name="workDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your work</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your work"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Interests & Engagement</h3>
            </div>
            <FormField
              control={form.control}
              name="howDidYouHear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about We The Youth?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Friends">Friends</SelectItem>
                      <SelectItem value="Social Media">Social Media</SelectItem>
                      <SelectItem value="College Activity">
                        College Activity
                      </SelectItem>
                      <SelectItem value="NGO/Club">NGO/Club</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleToTake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role you’d like to take</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Member">
                        Member (receive updates, join discussions)
                      </SelectItem>
                      <SelectItem value="Volunteer">
                        Volunteer (help organize campaigns and activities)
                      </SelectItem>
                      <SelectItem value="Campus Coordinator">
                        Campus Coordinator (lead initiatives on your campus)
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Skills & Time Commitment</h3>
            </div>
            <FormField
              control={form.control}
              name="skills"
              render={() => (
                <FormItem>
                  <FormLabel>What skills can you contribute?</FormLabel>
                  {[
                    "Public Speaking / Debating",
                    "Writing / Content Creation",
                    "Social Media & Digital Marketing",
                    "Design (graphics, video editing)",
                    "Organizing Events / Mobilizing Students",
                    "Research & Policy",
                    "Partnerships",
                    "Networking",
                    "Other",
                  ].map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="skills"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hoursPerWeek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many hours per week can you commit?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Less than 2 hours">
                        Less than 2 hours
                      </SelectItem>
                      <SelectItem value="2–5 hours">2–5 hours</SelectItem>
                      <SelectItem value="5–10 hours">5–10 hours</SelectItem>
                      <SelectItem value="10+ hours">10+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Motivation</h3>
            </div>
            <FormField
              control={form.control}
              name="changeToSee"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>What is one change you wish to see in India?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the change"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whyJoin"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Why do you want to join this movement?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us your motivation"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Consent & Confirmation</h3>
            </div>
            <FormField
              control={form.control}
              name="optInWhatsApp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Would you like to opt-in to a WhatsApp/ Telegram group?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPoliticallyActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you politically active?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="Maybe" />
                        </FormControl>
                        <FormLabel>Maybe</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isPoliticallyActive === "Yes" && (
              <>
                <div className="col-span-2">
                  <h3 className="text-lg font-medium">Elections</h3>
                </div>
                <FormField
                  control={form.control}
                  name="hasContestedElections"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Have you contested elections?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel>Yes</FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel>No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desireToContest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you have the desire to contest in elections?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel>Yes</FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel>No</FormLabel>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="Maybe" />
                            </FormControl>
                            <FormLabel>Maybe</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {hasContestedElections === "Yes" && (
                  <FormField
                    control={form.control}
                    name="contestedElectionsDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Which elections have you contested?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Student Union"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </>
            )}
            <div className="col-span-2">
              <h3 className="text-lg font-medium">Consent</h3>
            </div>
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to receive updates and participate in youth
                      activities.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="col-span-2 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
